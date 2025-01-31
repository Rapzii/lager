 let equipment = [
            { name: "Kamera", status: "tilgjengelig", image: null },
            { name: "Stativ", status: "tilgjengelig", image: null }
        ];

        function renderList() {
            const list = document.getElementById("equipmentList");
            list.innerHTML = "";
            equipment.forEach((item, index) => {
                list.innerHTML += `
                    <div class="equipment-item">
                        <div>
                            <span>${item.name} - ${item.status}</span>
                            ${item.image ? `<img src="${item.image}" class="image-preview">` : ''}
                        </div>
                        <div class="button-group">
                            <button onclick="toggleStatus(${index})">Endre status</button>
                            <button onclick="deleteEquipment(${index})">Slett</button>
                        </div>
                    </div>
                `;
            });
        }

        function addEquipment() {
            const name = document.getElementById("equipmentName").value;
            const imageInput = document.getElementById("equipmentImage");
            const imageFile = imageInput.files[0];

            if (name) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    equipment.push({ name, status: "tilgjengelig", image: e.target.result });
                    document.getElementById("equipmentName").value = "";
                    imageInput.value = "";
                    renderList();
                };
                if (imageFile) {
                    reader.readAsDataURL(imageFile);
                } else {
                    equipment.push({ name, status: "tilgjengelig", image: null });
                    document.getElementById("equipmentName").value = "";
                    renderList();
                }
            }
        }

        function toggleStatus(index) {
            equipment[index].status = equipment[index].status === "tilgjengelig" ? "utleid" : "tilgjengelig";
            renderList();
        }

        function deleteEquipment(index) {
            equipment.splice(index, 1);
            renderList();
        }

        renderList();
