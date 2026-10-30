// ホーム画面に追加（インストール）できるようにするための最小限のサービスワーカー。通信はそのままブラウザに任せる
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
