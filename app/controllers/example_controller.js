load('application');

action('index', function () {
  render({
    title: "example#index"
  });
});


action("request", function () {
    render({
        title: "example#request"
    });
});

action("api_request", function () {
    send({
       code: 0,
       resultvalue: [1,2,3,4,5]
    });
});