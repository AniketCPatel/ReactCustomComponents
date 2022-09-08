import { useState, useEffect, useRef } from 'react';
import {
  HTTP_POST_REQUEST,
  HTTP_GET_REQUEST,
  HTTP_POST_REQUESTv2,
  HTTP_GET_REQUESTv2,
} from './HttpService';
import { toast } from 'react-toastify';

const useFetch = (
  configuration = {
    url_context: '',
    include_base: false,
    method: 'GET',
    header: null,
    payload: null,
    initial_state: [],
    initial_load: true,
    default_error: true,
  }
) => {
  const {
    url_context = '',
    include_base = false,
    method = 'GET',
    header = null,
    payload = null,
    initial_state = [],
    initial_load = true,
    default_error = true,
  } = configuration;

  const [state, setState] = useState(initial_state);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(initial_load);
  const [toggle, setToggle] = useState(true);
  const initRef = useRef(initial_load ? 1 : 0);

  const clearToDefault = () => {
    setState(initial_state);
  };

  const reload = () => {
    setToggle((old) => !old);
  };

  useEffect(
    () => {
      if (initRef.current === 1) {
        setLoading(true);
        if (method === 'GET') {
          HTTP_GET_REQUEST(
            {
              url_context: url_context,
              headers: header,
              include_base: include_base,
            },
            (payload, success) => {
              setState(payload);
              setLoading(false);
            },
            (fail) => {
              setError(fail);
              setState(initial_state);
              setLoading(false);
              default_error && toast.error(fail);
            },
            (server_fail) => {
              setError(server_fail);
              setState(initial_state);
              setLoading(false);
              default_error && toast.error(server_fail);
            }
          );
        } else {
          HTTP_POST_REQUEST(
            {
              url_context: url_context,
              headers: header,
              include_base: include_base,
            },
            payload,
            (payload, success) => {
              setState(payload);
              setLoading(false);
            },
            (fail) => {
              setError(fail);
              setState(initial_state);
              setLoading(false);
              default_error && toast.error(fail);
            },
            (server_fail) => {
              setError(server_fail);
              setState(initial_state);
              setLoading(false);
              default_error && toast.error(server_fail);
            }
          );
        }
      } else {
        initRef.current = 1;
      }
    },
    // not to include payload, header, method
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url_context, default_error, toggle]
  );

  return { state, loading, reload, error, clearToDefault };
};

export default useFetch;

export const useFetchV2 = (
  config = {
    url: '',
    headers: {},
    params: {},
    payload: {},
    suppress_error: false,
    initial_state: [],
    initial_load: true,
    method: 'POST',
  }
) => {
  const {
    url = '',
    headers = {},
    payload = {},
    params = {},
    suppress_error = false,
    initial_state = [],
    initial_load = true,
    method = 'POST',
  } = config;

  const [state, setState] = useState(initial_state);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(initial_load);
  const [toggle, setToggle] = useState(true);
  const initRef = useRef(initial_load ? 1 : 0);

  const clearToDefault = () => {
    setState(initial_state);
  };

  const reload = () => {
    setToggle((old) => !old);
  };

  useEffect(
    () => {
      if (initRef.current === 1) {
        setLoading(true);
        if (method === 'GET') {
          HTTP_GET_REQUESTv2(
            {
              url: url,
              headers: headers,
              params: params,
              suppress_error: suppress_error,
            },
            (payload) => {
              setState(payload);
              setLoading(false);
            },
            (payload) => {
              setError(payload);
              setState(initial_state);
              setLoading(false);
            }
          );
        } else {
          HTTP_POST_REQUESTv2(
            {
              url: url,
              headers: headers,
              payload: payload,
              params: params,
              suppress_error: suppress_error,
            },
            (payload) => {
              setState(payload);
              setLoading(false);
            },
            (payload) => {
              setError(payload);
              setState(initial_state);
              setLoading(false);
            }
          );
        }
      } else {
        initRef.current = 1;
      }
    },
    // not to include payload, header, method
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url, suppress_error, toggle]
  );

  return { state, loading, reload, error, clearToDefault };
};
