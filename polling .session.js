//polling session + increase timeout
var pool = function () {

    var request = function (options, callback) {

        var generateTime = (function () {
            var count = 0;
            return function () {
                count++;
                return count * 1000;//(Math.floor(Math.random() * (max - min + 1)) + min)
            }
        })();

        var req = function () {
            $.ajax(options).then(callback).fail(function (data) {
                setTimeout(req, generateTime);
            });
        }
    };

    request({
        url: 'some-url',
        data: 'some-data'
    }, function (data) {
        alert('some success do' + data.toString());
    });

}

//few poll same time out 
var request = function (options, callback, errorCallback, count) {
      $.ajax(options).then(callback).fail(function (data) {
          if (count) {
              request(options, callback, errorCallback, count - 1);
          } else {
              errorCallback(data);
          }
      });
  };

request({url: '', data: {}, type: 'GET'}, function () {alert('success')}, function () {alert('error')}, 3)


