 /*
 const { write, readSourceFile } = require("../../utils");
 const { header } = require("../../callbacks");
 const { replaceMarkdown } = require("../../helpers");
 const { REGEXP_HEADER } = require("../../constants");

 const outFolder = "src/tests/_generated";

 describe("testing h1-inside-the-body", () => {
   it("renders h1-inside-the-body", () => {
     let markdown = readSourceFile("src/tests/h1-inside-the-body/content.md");
     
  
  let state = {
    content: markdown,
    previewText: "",
    warnings: {
      images: 0
    },
    errors: {
      previewText: false,
      sponsorshipTop: false,
      sponsorshipBottom: false,
    }
  };

     replaceMarkdown.call(REGEXP_HEADER, header).bind(state);

     const fileName = "h1-inside-the-body.html";
     write(fileName, parsedContent.content, outFolder);
     expect(1).toBe(1);
   });
 });
 */
