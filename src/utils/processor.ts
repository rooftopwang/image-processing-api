import sharp from "sharp";
import path from "path";

const folder = path.join(__dirname, "../../public/assets");

const processImage = async (
    fileName: string,
    width: number,
    height: number
) => {
    const file = path.join(folder, `/full/${fileName}.jpg`);
    const thumb = path.join(folder, `/thumb/${fileName}_thumb.jpg`);

    return new Promise<void>(function(resolve, reject) {
        sharp(file)
            .resize(width, height)
            .toFile(thumb, err => {
                // output.jpg is a 300 pixels wide and 200 pixels high image
                // containing a scaled and cropped version of input.jpg

                if (err == null) resolve();
                else reject(new Error(err.message));
            });
    });
};

export default processImage;
