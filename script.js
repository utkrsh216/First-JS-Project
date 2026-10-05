const users = [
  {
    name: "Utkarsh Verma",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Utkarsh",
    bio: "Silent chaos in world"
  },
  {
    name: "Aarav Sharma",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aarav",
    bio: "Dreaming big, coding bigger."
  },
  {
    name: "Priya Singh",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Priya",
    bio: "Coffee, code, repeat."
  },
  {
    name: "Rohan Gupta",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Rohan",
    bio: "Building ideas into reality."
  },
  {
    name: "Ananya Verma",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ananya",
    bio: "Creating memories, one day at a time."
  },
  {
    name: "Kabir Mehta",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Kabir",
    bio: "Lost in music and technology."
  },
  {
    name: "Aditya Rao",
    pic: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aditya",
    bio: "Learning something new every day."
  }
];

const cards = document.querySelector(".cards");
const inp = document.querySelector(".inp");

function showUser(arr) {

    cards.innerHTML = "";

    arr.forEach((user) => {

        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.className = "bg-img";
        img.src = user.pic;

        let blur = document.createElement("div");
        blur.className = "blurred-layer";
        blur.style.backgroundImage = `url(${user.pic})`;

        let content = document.createElement("div");
        content.className = "content";

        let h3 = document.createElement("h3");
        h3.textContent = user.name;

        let p = document.createElement("p");
        p.textContent = user.bio;

        content.append(h3, p);
        card.append(img, blur, content);

        cards.append(card);
    });
}

showUser(users);

inp.addEventListener("input", function () {

    let searchText = inp.value.toLowerCase();

    let filteredUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(searchText);
    });

    showUser(filteredUsers);
});