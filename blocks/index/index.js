export default async function decorate(block) {
    block.textContent = "";
    block.append(`${document.repo}`);
    
}