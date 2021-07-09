import processImage from "../../utils/processor";

describe("processor.ts: testing processor", () => {
    it("processImage should work", async () => {
        const filename = 'fjord2';
        const width = 200;
        const height = 100;
        
        
        try{
            await processImage(filename, width, height); 
        }catch(err){
            expect(err.message).toBe("fails2")
        }
        
    });
});
