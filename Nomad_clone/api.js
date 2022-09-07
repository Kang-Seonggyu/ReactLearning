    import fetch from "node-fetch";
    
    // APi 작업 연습
    const intern_url = `http://172.25.4.5:2101/osd_intern_board`;
    fetch(intern_url)
      .then((response) => response.json())  // 응답한 것을 json 파일로 처리
      .then((data) => {
        console.log(data.data[0].intern_name);
      })
    