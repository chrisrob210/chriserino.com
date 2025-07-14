'use client';

import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

export function BarcodeScanner({ onScan }: { onScan: (code: string) => void }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [codeReader] = useState(() => new BrowserMultiFormatReader());
    const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Load camera devices
    useEffect(() => {
        codeReader.listVideoInputDevices().then(videoInputDevices => {
            setDevices(videoInputDevices);

            if (videoInputDevices.length > 0) {
                const defaultDeviceId = videoInputDevices[0].deviceId;
                setSelectedDeviceId(defaultDeviceId);

                // Manually trigger scanning if only one device
                if (videoInputDevices.length === 1 && videoRef.current) {
                    codeReader.decodeFromVideoDevice(
                        defaultDeviceId,
                        videoRef.current,
                        (result, err) => {
                            if (result) {
                                onScan(result.getText());
                                codeReader.reset();
                            }
                            if (err && !(err.name === 'NotFoundException')) {
                                console.error('Scan error:', err);
                            }
                        }
                    );
                }
            }
        });

        return () => {
            codeReader.reset();
        };
    }, []);


    // Handle video stream and scanning
    useEffect(() => {
        if (!selectedDeviceId || !videoRef.current) return;

        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { deviceId: { exact: selectedDeviceId } },
                });
                console.log('Stream acquired:', stream); // Add this line
                videoRef.current!.srcObject = stream;
                videoRef.current!.play().catch((err) => console.error('Play error:', err));
                codeReader.decodeFromVideoDevice(
                    selectedDeviceId,
                    videoRef.current!,
                    (result, err) => {
                        if (result) {
                            console.log('Barcode:', result.getText());
                            onScan(result.getText());
                            codeReader.reset();
                        }
                        if (err && err.name !== 'NotFoundException') {
                            console.error('Decode error:', err);
                        }
                    }
                );
            } catch (err) {
                console.error('Error starting camera:', err);
                setError('Unable to start video stream.');
            }
        };

        startCamera();

        return () => {
            codeReader.reset();
            if (videoRef.current?.srcObject) {
                const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, [selectedDeviceId]);

    return (
        <div className="space-y-2 text-center">
            <video
                ref={videoRef}
                className="w-full h-auto border rounded"
                autoPlay
                muted
                playsInline
            />
            {devices.length > 0 && (
                <select
                    className="border p-1 rounded"
                    value={selectedDeviceId ?? ''}
                    onChange={(e) => setSelectedDeviceId(e.target.value)}
                >
                    {devices.map((device, idx) => (
                        <option key={idx} value={device.deviceId}>
                            {device.label || `Camera ${idx + 1}`}
                        </option>
                    ))}
                </select>
            )}
            {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
    );
}
