const chatListContainer = document.getElementById("chat-list");
chatListContainer.style.width = "100%";
const input = document.getElementById("input-search");
let chatLists = [];

const handleClick = (rowData) => {
  console.log("clicked!!", rowData);
  const chatListContainer = document.getElementById("chat-list");
  chatListContainer.style.width = "50%";
  chatListContainer.style.borderRight = "1px solid";

  const chatScreen = document.getElementById("chat-screen");
  chatScreen.style.display = "block";
};

// Utils
const formatTimeStamp = (timestamp) => {
  const dateObject = new Date(timestamp);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

const appendList = (chats) => {
  console.log("function call");

  const divContainerBlock = document.createElement("div");

  divContainerBlock.classList.add("chat-list-container");
  divContainerBlock.id = "chat-list-container-id";

  for (let list of chats) {
    const divBlock = document.createElement("div");
    divBlock.classList.add("chat-list");
    divBlock.onclick = () => handleClick(list);

    const divTitleOrderIdBlock = document.createElement("div");
    divTitleOrderIdBlock.classList.add("title-order-container");
    // title
    const textBlock = document.createElement("div");
    textBlock.classList.add("title");
    textBlock.innerText = list.title;

    // order Id
    const orderTextBlock = document.createElement("div");
    orderTextBlock.classList.add("orderId");
    orderTextBlock.innerText = "Order " + list.orderId;

    divTitleOrderIdBlock.appendChild(textBlock);
    divTitleOrderIdBlock.appendChild(orderTextBlock);

    // image
    const imgBlock = document.createElement("img");
    imgBlock.classList.add("chat-img");
    imgBlock.width = 50;
    imgBlock.height = 50;
    imgBlock.setAttribute("src", list.imageURL);

    // timeStamp
    const timeStampBlock = document.createElement("div");
    timeStampBlock.classList.add("timestamp");

    const timestamp = formatTimeStamp(list.latestMessageTimestamp);

    // Assuming timeStampBlock is an HTML element where you want to display the formatted date
    timeStampBlock.innerText = timestamp;

    // Array of elements
    const elementsArray = [imgBlock, divTitleOrderIdBlock, timeStampBlock];

    // Append each element to the divBlock
    elementsArray.forEach((element, index) => {
      divBlock.appendChild(element);
    });

    divBlock.style.borderBottom = "1px solid #ccc";
    divBlock.style.cursor = "pointer";

    divContainerBlock.appendChild(divBlock);
  }

  chatListContainer.appendChild(divContainerBlock);
};

// Services
async function fetchChats() {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
    );

    const data = await response.json();

    chatLists.push(...data);

    appendList(chatLists);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// call
fetchChats();

const myDebounce = (fn, delay) => {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const onchange = async (e) => {
  const { value } = e.target;

  const chatListContainer = document.getElementById("chat-list");
  chatListContainer.innerHTML = "";

  let filteredChats = chatLists;

  // Filter the chatLists based on orderId or title
  if (value || value !== " ") {
    filteredChats = chatLists.filter((chat) => {
      return (
        chat.orderId.toLowerCase().includes(value.toLowerCase()) ||
        chat.title.toLowerCase().includes(value.toLowerCase())
      );
    });

    appendList(filteredChats);
  } else {
    fetchChats();
  }
};

input.addEventListener("keyup", myDebounce(onchange, 500));
