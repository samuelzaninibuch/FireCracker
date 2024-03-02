import { socks, bases, createSock, deleteSock, createBase, deleteBase } from './sock/sock.js';
import { CreatePocket, DeletePocket, pocket } from './pocket/pocket.js';
export const data = {};
export const cache = {};

export function passData(sockName, sockData) {
    if (socks[sockName]) {
        data[sockName] = sockData;
    } else {
        console.error(`Sock ${sockName} not found.`);
    }
}

export function useSock(name) {
    if (socks[name]) {
        socksname;
    } else {
        console.error(`Sock ${name} not found.`);
    }
}

export function useBase(baseName, sockName) {
    if (bases[baseName]) {
        if (sockName) {
            if (bases[baseName].includes(sockName)) {
                sockssockName;
            } else {
                console.error(`Sock ${sockName} not found in base ${baseName}.`);
            }
        } else {
            for (const sock of bases[baseName]) {
                sockssock;
            }
        }
    } else {
        console.error(`Base ${baseName} not found.`);
    }
}

export function UsePocket(pocketName, pocketData){
    if(pocket[pocketName]){
        cache[pocketName] = pocketData;
    }
}

export { createSock, deleteSock, createBase, deleteBase, CreatePocket, DeletePocket };
