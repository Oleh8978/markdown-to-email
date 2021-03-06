const { write, readSourceFile } = require("../../../utils");
const { link } = require("../../../callbacks-simple");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_LINK } = require("../../../constants");

const outFolder = "src/tests/_generated";

 describe("testing links when space before link", () => {
   it("renders testing links when space before link", () => {
     let markdown = readSourceFile("src/tests/link/removed-space-before-link/content.md");
     let parsedContent = {
       content: markdown,
     };

     replaceMarkdown.call(parsedContent, REGEXP_LINK, link);

     const fileName = "links-empty-space.html";
     write(fileName, parsedContent.content, outFolder);
     expect(1).toBe(1);
   });
 });
