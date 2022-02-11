const roles = [{id: 0, name: 'ADMIN'}];
const users = [];
console.log('roles', roles);

function checkRoleExists(role) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exists = roles.find(r => r.name === role.name);
            resolve(exists);
        }, 5000);
    });
}

function createRole(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const role = {
                id: roles.length,
                name,
            };
            roles.push(role);
            resolve(role);
        }, 5000);
    });
}

async function initialRole(roleName) {
    const initialRolePromise = new Promise(async (resolve, reject) => {
    const exists = await checkRoleExists({ name: roleName });
    if (!exists) {
        console.log('role does not exist, creating...', roleName);
        const role = await createRole(roleName);
        console.log('role', role);
        resolve(role);
    } else {
        console.log('role exists');
        resolve(null);
    }
   
    });
    return initialRolePromise;
}

function initialRoles(arrayOfRoles) {
    arrayOfRoles.forEach(role => {
        initialRole(role).then(role => {
            console.log('all roles', roles);
        });
    });
}

initialRoles(['BASIC', 'ADMIN', 'PRO', 'SUPER']);