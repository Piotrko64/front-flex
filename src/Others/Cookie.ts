// export function checkCookie(x: string) {
//     const Cookies = document.cookie.split(";") || ["color=#7982db", "lang=pl"];
//     let C = "";
//     Cookies.forEach((element) => {
//         if (element.split("=")[0].indexOf(x) !== -1) {
//             C = element.split("=")[1];
//         }
//     });
//     return C;
// }
// export function setCookie(name: string, value: string) {
//     const Cookies = document.cookie.split(";") || ["color=#7982db", "lang=pl"];
//     let copyCookies = [...Cookies];
//     copyCookies.forEach((element, index) => {
//         if (element.split("=")[0].indexOf(name) !== -1) {
//             copyCookies[index] = `${name}=${value}`;
//         } else if (element.split("=")[0].indexOf(name) === -1) {
//             document.cookie = `${name}=${value}`;
//             return;
//         }
//     });

//     document.cookie = copyCookies.join(";");
//     console.log(document.cookie);
// }
// export function Pl() {
//     if (checkCookie("lang") === "pl") {
//         return true;
//     }
//     return false;
// }
