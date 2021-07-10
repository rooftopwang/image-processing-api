import processImage from "../../utils/processor";
import { promises as fs } from "fs";
import path from "path";

describe("processor.ts: testing processor", () => {
    const width = 200;
    const height = 100;
    describe("testing the case, when file name is correct", async () => {
        const filename = "fjord";
        const thumb = path.join(
            __dirname,
            `../../../public/assets/thumb/${filename}_thumb.jpg`
        );

        afterAll(function() {
            // if it throw error, it means file is not added. which is impossible.
            fs.access(thumb).then(function() {
                fs.unlink(thumb);
            });
        });

        it("processImage should work, when file name is correct", async () => {
            // pass when it does not throw error
            await processImage(filename, width, height);
        });
    });

    describe("testing the case, when file name is incorrect", async () => {
        const filename = "a_wrong_name";
        it("processImage should break, when file name is incorrect", async () => {
            processImage(filename, width, height).catch(error => {
                expect(error.message).toBe("Input file is missing");
            });
        });
    });
});
