

export function dropEmulator() {
    var script = document.createElement('script');

    script.setAttribute('async', '');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'calcemu.js');

    document.body.appendChild(script);
}