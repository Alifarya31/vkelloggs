const formDom = document.getElementById("form");
const nameDom = document.getElementById("name");
const emailDom = document.getElementById("email");
const subjectDom = document.getElementById("subject");
const messageDom = document.getElementById("message");

const objectStore = {
  name: {
    value: "",
    errorMessage: "",
  },
  email: {
    value: "",
    errorMessage: "",
  },
  subject: {
    value: "",
    errorMessage: "",
  },
  message: {
    value: "",
    errorMessage: "",
  },
};

// nameDom.addEventListener("input", (event) => {
//   objectStore["name"].value = event.target.value;
// });

// emailDom.addEventListener("input", (event) => {
//   objectStore["email"].value = event.target.value;
// });
// subjectDom.addEventListener("input", (event) => {
//   objectStore["subject"].value = event.target.value;
// });
// messageDom.addEventListener("input", (event) => {
//   objectStore["message"].value = event.target.value;
// });

function listenToDom(dom) {
  dom.addEventListener("input", (event) => {
    // TODO lakukan validasi lainnya disini jika diperlukan.
    objectStore[event.target.id].value = event.target.value;

    objectStore[event.target.id].errorMessage = "";
    const errorId = `${event.target.id}-error`;
    const dom = document.getElementById(errorId);
    dom.innerHTML = "";
  });
}

listenToDom(nameDom);
listenToDom(emailDom);
listenToDom(subjectDom);
listenToDom(messageDom);

formDom.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!objectStore.name.value) {
    objectStore.name.errorMessage = "Nama tidak boleh kosong";
  }

  if (!objectStore.email.value) {
    objectStore.email.errorMessage = "Email tidak boleh kosong";
  }

  if (!objectStore.subject.value) {
    objectStore.subject.errorMessage = "Subjek tidak boleh kosong";
  }

  if (!objectStore.message.value) {
    objectStore.message.errorMessage = "Pesan tidak boleh kosong";
  }

  if (
    objectStore.name.errorMessage ||
    objectStore.email.errorMessage ||
    objectStore.subject.errorMessage ||
    objectStore.message.errorMessage
  ) {
    const arr = Object.keys(objectStore).filter(
      (key) => objectStore[key].errorMessage
    );

    for (let i = 0; i < arr.length; i++) {
      const errorId = `${arr[i]}-error`;
      const dom = document.getElementById(errorId);
      dom.innerHTML = objectStore[arr[i]].errorMessage;
    }
    return;
  }

  console.log("Data yang dikirim", objectStore);
});
