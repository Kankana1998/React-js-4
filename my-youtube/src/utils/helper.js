let nameList = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
    "Kate", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Ryan", "Sophia", "Tyler",
    "Uma", "Vincent", "Wendy", "Xander", "Yvonne", "Zach"
];

export default function generateRandomName() {
   return nameList[Math.floor(Math.random() * nameList.length )];
}

export function makeRandomMessage(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while(counter < length){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }

    return result;
}