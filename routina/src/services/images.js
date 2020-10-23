export {Images};
class Images{

    static get baseUrl(){
        return "https://api.cloudinary.com/v1_1/atormakh";
    }

    static async uploadImage(file){
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "wrnntuiu");
        let url = `${Images.baseUrl}/image/upload`;
        return await fetch(url, {
            method: "POST",
            body: formData
          });
            
            
        
    }

}