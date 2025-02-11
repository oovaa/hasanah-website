import * as vscode from 'vscode';

class NotificationQueue {
    private static instance: NotificationQueue;
    private queue: Array<() => Promise<void>> = [];
    private isProcessing = false;

    private constructor() {}

    static getInstance(): NotificationQueue {
        if (!NotificationQueue.instance) {
            NotificationQueue.instance = new NotificationQueue();
        }
        return NotificationQueue.instance;
    }

    async add(message: string, duration: number): Promise<void> {
        const notification = async () => {
            await vscode.window.withProgress(
                {
                    location: vscode.ProgressLocation.Notification,
                    title: message,
                    cancellable: true
                },
                (progress, token) => {
                    return new Promise<void>(resolve => {
                        token.onCancellationRequested(() => resolve());
                        setTimeout(resolve, duration);
                    });
                }
            );
        };

        this.queue.push(notification);
        if (!this.isProcessing) {
            this.processQueue();
        }
    }

    private async processQueue(): Promise<void> {
        if (this.queue.length === 0) {
            this.isProcessing = false;
            return;
        }

        this.isProcessing = true;
        const notification = this.queue.shift();
        if (notification) {
            await notification();
            this.processQueue();
        }
    }
}

export default NotificationQueue.getInstance();