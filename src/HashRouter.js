export class HashRouter {
    constructor(host, routes) {
        this.host = host;
        this.routes = routes;
        host.addController(this);
    }

    hostConnected() {
        window.addEventListener('hashchange', this._onHashChange);
    }

    hostDisconnected() {
        window.removeEventListener('hashchange', this._onHashChange);
    }

    _onHashChange = () => {
        this.host.requestUpdate();
    };

    get currentPath() {
        const hash = window.location.hash;
        // No hash: home
        if (!hash || hash === '#') {
            return '/';
        }
        // "#/archive": "/archive"
        let path = hash.substring(1);
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        return path;
    }

    outlet() {
        const path = this.currentPath;
        const route = this.routes.find(route => {
            if (route.path === '(.*)') {
                return true;
            }
            return route.path === path;
        });
        if (!route) {
            return null;
        }
        return route.render();
    }

    goto(path) {
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        window.location.hash = path;
    }

    link(path) {
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        return `#${path}`;
    }
}