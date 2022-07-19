let btn = document.querySelector("#btn");
let h1El = document.querySelector("#msg");

const listener = () => {
    btn.addEventListener("click", async () =>{
        const {mudarCor} = await import("./modules/function.js");
        mudarCor(h1El);
    });
}

listener();