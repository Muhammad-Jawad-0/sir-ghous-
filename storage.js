import { getStorage , ref,uploadBytesResumable,getDownloadURL,storage  } from './firebase.js'

        const uploudToStorage = (file) => {
            return new Promise((resolve, reject) => {
                // const file = document.getElementById("file");
                const fileName = file.name;
                const storageRef = ref(
                    storage,
                    `users/ashdlw26743`
                );
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        switch (snapshot.state) {
                            case "paused":
                                console.log("Upload is paused");
                                break;
                            case "running":
                                console.log("Upload is running");
                                break;
                        }
                    },
                    (error) => {
                        reject(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            console.log("File available at", downloadURL);
                            resolve(downloadURL)
                        });
                    }
                );
            });
        };

        const uploudFile = async() => {
            const file = document.getElementById('file')
            const url = await uploudToStorage(file.files[0]);
            // const fileName = file.files[0].name
            // console.log(fileName.slice(fileName.lastIndexOf('.')))
            console.log('url>>>>>>>>' , url)
        };

        const uploudBtn = document.getElementById("uploudBtn");
        uploudBtn.addEventListener("click", uploudFile);

        const file = document.getElementById("file");

        file.addEventListener("change", (e) => {
            const image = document.getElementById("image");
            image.src = URL.createObjectURL(e.target.files[0]);
        });