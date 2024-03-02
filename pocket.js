export const pocket = {};

export async function CreatePocket(name){
    pocket[name] = async function(){
        let data = {};
        return data;
    };
}

export function DeletePocket(name){
    delete pocket[name];
}