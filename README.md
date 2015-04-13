### snappass-static-react

This is an example front-end for the snappass-backend-<star> apps.

Usage
-----

Download snappass-static-react somewhere onto your server. Then, go into your backend (snappass-backend-goji) and create a symlink. For example:

```
ln -s ~/snappass-static-react ~/snappass-backend-goji/snappass-static
```

Then, just run the goji backend:

```
# make; ./snappass-backend-goji etc/config.json
go get github.com/adarqui/snappass-core-go
go get github.com/zenazn/goji
go get github.com/zenazn/goji/web
go get github.com/hypebeast/gojistatic
go test
?       github.com/adarqui/snappass-backend-goji        [no test files]
go build
2015/04/13 15:29:14.185634 Starting Goji on 127.0.0.1:5000
2015/04/13 15:29:32.231920 [polyp/q2PdhlE3kX-000001] Started GET "/" from 127.0.0.1:35059
2015/04/13 15:29:32.232101 [polyp/q2PdhlE3kX-000001] Returning 304 in 97.469µs
2015/04/13 15:29:32.301430 [polyp/q2PdhlE3kX-000002] Started GET "/build/bundle.js" from 127.0.0.1:35059
2015/04/13 15:29:32.304974 [polyp/q2PdhlE3kX-000002] Returning 200 in 3.473298ms
2015/04/13 15:29:33.634970 [polyp/q2PdhlE3kX-000003] Started GET "/build/bundle.js.map" from 127.0.0.1:35059
2015/04/13 15:29:33.635882 [polyp/q2PdhlE3kX-000003] Returning 200 in 837.025µs
...
```

Then, load up the webserver in chrome: http://<host>:5000
