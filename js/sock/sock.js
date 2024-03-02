
export const socks = {};
export const bases = {};

export async function createSock(name, path) {
    socks[name] = async function() {
        const response = await fetch(path);
        const content = await response.text();
        document.getElementById('content').innerHTML = content;
    };
}

export function deleteSock(name) {
    delete socks[name];
}

export function createBase(baseName, min, max) {
    bases[baseName] = Object.keys(socks).slice(min, max);
}

export function deleteBase(baseName) {
    delete bases[baseName];
}
