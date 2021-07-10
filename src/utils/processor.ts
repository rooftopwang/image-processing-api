import sharp from "sharp";
import path from "path";
import { promises as fs } from "fs";

const folder = path.join(__dirname, "../../public/assets");

const createThumbnail = async (
    fileName: string,
    width: number,
    height: number
): Promise<void> => {
    // in the future, consider to apply inversion of control, in order to scale up later.

    const file = path.join(folder, `/full/${fileName}.jpg`);
    const thumb = path.join(
        folder,
        `/thumb/${fileName}_${width}_${height}.jpg`
    );

    return new Promise<void>(function(resolve, reject) {
        sharp(file)
            .resize(width, height)
            .toFile(thumb, err => {
                if (err == null) resolve();
                else reject(new Error(err.message));
            });
    });
};

const accessImage = async (
    fileName: string,
    width: number,
    height: number
): Promise<Buffer> => {
    const thumb = path.join(
        folder,
        `/thumb/${fileName}_${width}_${height}.jpg`
    );
    try {
        await fs.access(thumb);
    } catch (err) {
        await createThumbnail(fileName, width, height);
    }
    return fs.readFile(thumb);
};

export { accessImage, createThumbnail };
