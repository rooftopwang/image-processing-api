import sharp from "sharp";
import path from "path";
import { exception } from "console";

const folder = path.join(__dirname, "../../public/assets");

const processImage = async (
    fileName: string,
    width: number,
    height: number
) => {
    const file = path.join(folder, `/full/${fileName}.jpg`);
    const thumb = path.join(folder, `/thumb/${fileName}_thumb.jpg`);
    console.log(`file is: ${file}`)
    try {
        let errorMsg = "";
        await sharp(file)
            .resize(width, height)
            .toFile(thumb, function(err) {
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg
                errorMsg = 'fails.';
            });
        if(errorMsg !== "")
        throw new Error(errorMsg)
    } catch (err) {
        throw new Error("fails");
    }
};

export default processImage;
