import { accessImage, createThumbnail } from "../../utils/processor";
import { promises as fs } from "fs";
import path from "path";

describe("processor.ts: testing processor", (): void => {
    const width = 200;
    const height = 100;
    describe("testing the case, when file name is correct", async (): Promise<void> => {
        const filename = "fjord";
        const anotherFile = "icelandwaterfall";
        const pathToThumb = (file: string): string =>
            path.join(
                __dirname,
                `../../../public/assets/thumb/${file}_${width}_${height}.jpg`
            );

        const thumb = pathToThumb(filename);
        const anotherthumb = pathToThumb(anotherFile);

        afterAll(async function (): Promise<void> {
            // if it throw error, it means file is not added. which is impossible.
            await fs.unlink(thumb);
            await fs.unlink(anotherthumb);
        });

        it("createThumbnail should work, when file name is correct", async (): Promise<void> => {
            // pass when it does not throw error
            await createThumbnail(filename, width, height);
            // after creating it, thumb shall be accessed
            await fs.access(thumb);
        });

        it("should succesfully get data from accessImage()", async (): Promise<void> => {
            await accessImage(anotherFile, width, height).then(stream => {
                expect(stream).toBeTruthy();
            });
        });
    });

    describe("testing the case, when file name is incorrect", async (): Promise<void> => {
        const filename = "a_wrong_name";
        it("createThumbnail should break, when file name is incorrect", async (): Promise<void> => {
            await createThumbnail(filename, width, height).catch(error => {
                expect(error.message).toBe("Input file is missing");
            });
        });
    });
});
