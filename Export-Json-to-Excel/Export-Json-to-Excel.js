import React from 'react';
import { utils, writeFile } from 'xlsx';
import { DownloadIcon } from '../../helper/fetchSVG';
import styles from '../../screens/searchPages.module.css';
import PropTypes from 'prop-types';

const CustomReportDownload = ({ data = [], fileName = 'Data.xlsx' }) => {
  const handleExport = () => {
    const wb = utils.book_new();
    const ws = utils.json_to_sheet(data);
    utils.book_append_sheet(wb, ws, 'Sheet1');
    writeFile(wb, fileName);
  };

  return (
    <button
      disabled={data.length === 0}
      type="button"
      className={styles.downloadButtons}
      onClick={handleExport}
    >
      Download &nbsp;
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-download"
        viewBox="0 0 16 16"
      >
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
      </svg>
    </button>
  );
};

CustomReportDownload.propTypes = {
  fileName: PropTypes.any.isRequired,
  data: PropTypes.array.isRequired,
};

export default CustomReportDownload;

// .downloadButtons {
//   background-color: #FFFFFF !important;
//   color: #0695d3 !important;
//   border: 2px solid #0695d3 !important;
//   width: 120px;
//   height: 38px;
//   border-radius: 5px;
//   font-size: 16px;
//   margin-left: 20px;
// }

// .downloadButtons:hover {
//   color: #FFFFFF !important;
//   background-color: #009BDF !important;
//   cursor: pointer;
// }
