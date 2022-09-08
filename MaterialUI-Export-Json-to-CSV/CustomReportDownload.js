import React from 'react';
import { IconButton, Tooltip, Zoom } from '@material-ui/core';
import CsvDownloader from 'react-csv-downloader';
import GetAppIcon from '@material-ui/icons/GetApp';
import PropTypes from 'prop-types';

const CustomReportDownload = (props) => {
  const { column, data, name } = props;

  const downCol = column
    .filter((data) => data.id !== 'action')
    .map((item) => ({
      id: item.originalId || item.id,
      displayName: item.label,
    }));

  return (
    <div>
      <Tooltip
        title="Download Report"
        placement="top"
        TransitionComponent={Zoom}
      >
        <CsvDownloader filename={name} columns={downCol} datas={data}>
          <IconButton style={{ cursor: 'pointer', color: '#b404c7' }}>
            <GetAppIcon />
          </IconButton>
        </CsvDownloader>
      </Tooltip>
    </div>
  );
};

CustomReportDownload.propTypes = {
  column: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.any.isRequired,
};

export default CustomReportDownload;
