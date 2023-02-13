


export class Base64{

    public static async base64(file: File): Promise<string | ArrayBuffer | any> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    public static getBase64(event: any) {
        let me = this;
       let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          //me.modelvalue = reader.result;
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
     }
}