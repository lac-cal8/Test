const data = {
    "First Path": [
        { text: "• The ocean breeze heals the soul.", img: "LINK_ANH_1_PAGE_1" },
        { text: "• Finding peace in every wave.", img: "LINK_ANH_2_PAGE_1" }
    ],
    "Second Path": [
        { text: "• Warm latte for a cozy morning.", img: "LINK_ANH_1_PAGE_2" },
        { text: "• Sweetness in every sip of life.", img: "LINK_ANH_2_PAGE_2" }
    ]
};

window.onload = function() {
    const pageTitle = document.title;
    const items = data[pageTitle];
    const listContainer = document.getElementById("list-content");

    async function showItems() {
        for (let item of items) {
            // Tạo phần tử li
            const li = document.createElement("li");
            const textSpan = document.createElement("span");
            textSpan.className = "item-text";
            const imgElement = document.createElement("img");
            imgElement.src = item.img;
            imgElement.className = "item-img";

            li.appendChild(textSpan);
            li.appendChild(imgElement);
            listContainer.appendChild(li);

            // Hiệu ứng đánh máy
            await typeEffect(textSpan, item.text);
            // Hiện ảnh sau khi gõ xong
            imgElement.style.display = "block";
        }
    }

    function typeEffect(element, text) {
        return new Promise(resolve => {
            let i = 0;
            function typing() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, 40);
                } else {
                    resolve();
                }
            }
            typing();
        });
    }

    showItems();
};
