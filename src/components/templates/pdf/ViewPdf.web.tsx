import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
const ViewPdfWeb = () => {
  const [numPages, setNumPages] = useState<number|null>(null);
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages}:any): void {
    setNumPages(numPages);
  
  }
  return ( 
    <div>
      <Document file="pdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
   );
}
 
export default ViewPdfWeb;