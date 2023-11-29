const bookmark = document.querySelectorAll(".bookmark");
const categoryFilters = document.querySelectorAll(
  ".freelancer-page-category-filter"
);
const messagesTitle = document.querySelector(".messages-title");
const messagesContent = document.querySelector(".messages-content");
const newMessagesTitle = document.querySelector(".new-messages-title");
const newMessagesContent = document.querySelector(".new-messages-content");
const newMessages = document.querySelector(".new-messages");

const messageInput = document.querySelector("#messageInput");
const sendMessageButton = document.querySelector("#sendMessageButton");
const mySendMessages = document.querySelector("#mySendMessages");
const addPp = document.querySelector("#addPp");
const addPpBg = document.querySelector(".add-pp-bg");
const finishRegistrationButton = document.querySelector(
  "#finishRegistrationButton"
);

const darkMaximizeIcon = document.querySelector(".dark-maximize-icon");
const lightMaximizeIcon = document.querySelector(".light-maximize-icon");
const darkMessageIcon = document.querySelector(".dark-message-icon");
const lightMessageIcon = document.querySelector(".light-message-icon");
const darkEditIcon = document.querySelector(".dark-edit-icon");
const lightEditIcon = document.querySelector(".light-edit-icon");
const darkMaximizeIcon2 = document.querySelector(".dark-maximize-icon-2");
const lightMaximizeIcon2 = document.querySelector(".light-maximize-icon-2");

const messageItem = document.querySelectorAll("#message-item");
const currentUserInput = document.querySelector(".current-user-input");

const dahaCoxGosterButton = document.querySelector(".daha-cox-goster-button");
const dahaCoxGosterContent = document.querySelector(".daha-cox-goster-content");

const dahaCoxGosterButton2 = document.querySelector(
  ".daha-cox-goster-button-2"
);
const dahaCoxGosterContent2 = document.querySelector(
  ".daha-cox-goster-content-2"
);

const dahaCoxGosterButton3 = document.querySelector(
  ".daha-cox-goster-button-3"
);
const dahaCoxGosterContent3 = document.querySelector(
  ".daha-cox-goster-content-3"
);

const dahaCoxGosterButton4 = document.querySelector(
  ".daha-cox-goster-button-4"
);
const dahaCoxGosterContent4 = document.querySelector(
  ".daha-cox-goster-content-4"
);

const content = `<div class="elan-card elan-card-secondary py-9 px-12">
  <div class="flex items-center justify-between">
    <div class="company flex items-center gap-2 pt-5">
      <div class="company-profile">
        <img src="./assets/icons/profile-sm.svg" alt="profile" />
      </div>
      <div class="text-sm font-semibold">Şirkətin adı</div>
    </div>
    <div class="bookmark p-3 flex items-center justify-center">
      <img
        src="./assets/icons/bookmark.svg"
        alt="bookmark-icon"
        class="bookmark-icon"
      />
      <img
        src="./assets/icons/crown.svg"
        alt="bookmark-icon"
        class="crown-icon"
      />
    </div>
  </div>
  <div class="elan-card-amount mt-9 mb-5">
    <span class="font-medium">50₼</span>
  </div>
  <h4 class="mb-3">Senior Editor for Advertising Blog</h4>
  <p class="mb-8">
    Looking for an experienced online editor to help oversee the
    content and team for a blog talking about digital marketing and
    advertisin…
  </p>
  <div
    class="category-cards font-medium flex items-center justify-between"
  >
    <div class="flex items-center gap-3">
      <span class="category-card category-card-primary"
        >Məqalə/Bloq</span
      >
      <span class="category-card category-card-primary"
        >Deadline: 05.08.2023</span
      >
    </div>
    <a
      href="./elana-gelen-muracietler.html"
      class="category-card category-card-secondary"
      >Ətraflı ></a
    >
  </div>
</div>`;

const content2 = `
<a href="./muraciet-detallari.html">
  <div
    class="elan-card elan-card-secondary tesdiqlenmis-frilans-is py-9 px-12"
  >
    <div class="flex items-center justify-between">
      <div class="company flex items-center gap-2 pt-5">
        <div class="company-profile">
          <img src="./assets/icons/profile-sm.svg" alt="profile" />
        </div>
        <div class="text-sm font-semibold">Şirkətin adı</div>
      </div>
      <div class="p-3 flex items-center justify-center">
        <span class="category-card category-card-primary"
          >Məqalə/Bloq</span
        >
      </div>
    </div>
    <h4 class="mb-3">Senior Editor for Advertising Blog</h4>
    <p class="mb-8">
      Looking for an experienced online editor to help oversee the
      content and team for a blog talking about digital marketing
      and advertisin…
    </p>
  </div>
</a>
`;

const content3 = `
<div
  class="elan-card elan-card-secondary tesdiqlenmis-frilans-is py-9 px-12"
>
  <div class="flex items-center justify-between mb-8">
    <div class="company flex items-center gap-2 pt-5">
      <div class="company-profile">
        <img src="./assets/icons/profile-sm.svg" alt="profile" />
      </div>
      <div class="text-sm font-semibold">Şirkətin adı</div>
    </div>
  </div>
  <h4 class="mb-3">Senior Editor for Advertising Blog</h4>
  <p class="mb-8">
    Looking for an experienced online editor to help oversee the
    content and team for a blog talking about digital marketing
    and advertisin…
  </p>
  <div class="flex items-center justify-between">
    <span class="category-card category-card-primary"
      >Məqalə/Bloq</span
    >
    <a
      href="./muraciet-detallari.html"
      class="category-card category-card-secondary"
      >Ətraflı ></a
    >
  </div>
</div>
`;

const content4 = `
<div
  class="mt-5 freelancer-card px-2 py-9 flex flex-col items-center justify-center"
>
  <div
    class="freelancer-profile flex items-center justify-center p-5"
  >
    <img src="./assets/icons/profile.svg" alt="profile" />
  </div>
  <div class="mt-5 flex flex-col items-center">
    <div>
      <span class="text-xl">Fidan Zeynallı</span>
    </div>
    <div class="mt-1">
      <span
        class="text-base font-bold"
        style="color: var(--primary-color);"
        >94 points</span
      >
    </div>
  </div>

  <div
    class="category-cards font-medium flex items-center justify-center mb-6"
  >
    <div
      class="flex items-center justify-center flex-wrap gap-3 mt-5"
    >
      <span class="category-card category-card-primary"
        >Tərcümə</span
      >
      <span class="category-card category-card-primary"
        >Məqalə/Bloq</span
      >
      <span class="category-card category-card-primary"
        >Məqalə/Bloq</span
      >
      <span class="category-card category-card-primary"
        >Sosial Media Kopiraytı</span
      >
    </div>
  </div>
  <button type="button" class="secondary-button">
    <a href="./profile-details.html">Ətraflı ></a>
  </button>
</div>
`;

if (dahaCoxGosterButton) {
  dahaCoxGosterButton.addEventListener("click", () => {
    dahaCoxGosterContent.innerHTML = `
    ${dahaCoxGosterContent.innerHTML}
    ${content}
    ${content}
    ${content}
    ${content}
    ${content}
    ${content}
    `;
  });
}

if (dahaCoxGosterButton2) {
  dahaCoxGosterButton2.addEventListener("click", () => {
    dahaCoxGosterContent2.innerHTML = `
    ${dahaCoxGosterContent2.innerHTML}
    ${content2}
    ${content2}
    ${content2}
    ${content2}
    ${content2}
    ${content2}
    `;
  });
}

if (dahaCoxGosterButton3) {
  dahaCoxGosterButton3.addEventListener("click", () => {
    dahaCoxGosterContent3.innerHTML = `
    ${dahaCoxGosterContent3.innerHTML}
    ${content3}
    ${content3}
    ${content3}
    ${content3}
    ${content3}
    ${content3}
    `;
  });
}

if (dahaCoxGosterButton4) {
  dahaCoxGosterButton4.addEventListener("click", () => {
    dahaCoxGosterContent4.innerHTML = `
    ${dahaCoxGosterContent4.innerHTML}
    <div class = 'flex flex-wrap gap-6'>
    ${content4}
    ${content4}
    ${content4}
    </div>
    `;
  });
}

messageItem.forEach((item, i) => {
  item.addEventListener("click", () => {
    currentUserInput.innerHTML = `
      <div class = 'flex items-center gap-3'>
        <div class = 'profile-sm bg-black-color'>
          <img src = './assets/icons/profile.svg'>
        </div>
        <span>Fidan Zeynallı</span>
      </div>
    `;
  });
});

const changeAddPpBackground = () => {
  if (addPp) {
    var file = addPp.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      addPpBg.innerHTML = `
      <div
        class="bg-white-color flex items-center justify-center"
        style="
          width: 120px;
          height: 120px;
          border-radius: 9999px;
          background: url('${e.target.result}');
          background-size:cover;
        "
      >
        <input
          type="file"
          style="width: 100%; height: 100%; opacity: 0;"
          id="addPp"
        />
      </div>
      `;
    };
    reader.readAsDataURL(file);
  }
};

if (addPp) {
  addPp.addEventListener("change", changeAddPpBackground);
}

if (sendMessageButton) {
  sendMessageButton.addEventListener("click", () => {
    if (messageInput.value == "") {
      alert("Bos mesaj gonderile bilmez.");
    } else {
      mySendMessages.innerHTML = `
        ${mySendMessages.innerHTML}

        <div class="text-black"">
          <div
            class="py-4 px-5 bg-secondary-color-2"
            style="width: 300px; border-radius: 12px;"
          >
            ${messageInput.value}
          </div>
        </div>
      `;
      messageInput.value = "";
    }
  });
}

if (messagesTitle) {
  messagesTitle.style.cursor = "pointer";
  messagesTitle.addEventListener("click", (e) => {
    messagesTitle.classList.toggle("open-messages");
    messagesTitle.classList.toggle("bg-primary-color");
    messagesTitle.classList.toggle("text-white");
    messagesTitle.classList.toggle("bg-secondary-color-2");
    messagesContent.classList.toggle("hidden");

    darkMaximizeIcon.classList.toggle("hidden");
    lightMaximizeIcon.classList.toggle("hidden");
    darkMessageIcon.classList.toggle("hidden");
    lightMessageIcon.classList.toggle("hidden");
    darkEditIcon.classList.toggle("hidden");
    lightEditIcon.classList.toggle("hidden");
    darkMaximizeIcon2.classList.toggle("hidden");
    lightMaximizeIcon2.classList.toggle("hidden");

    newMessages.classList.toggle("hidden");
  });
}

bookmark.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("bookmark-icon-fill");
  });
});

categoryFilters.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

if (document.getElementById("searchInput")) {
  document
    .getElementById("searchInput")
    .addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        location.href = "./search-page.html";
        event.preventDefault();
      }
    });
}
