# nuber-server

## DB start

```sh
  postgres -D /usr/local/var/postgres
  pg_ctl -D /usr/local/var/postgres start       // 백그라운드에서 시작
```

## 접속

```sh
  psql –U postgres –d postgres

  // -U : 사용자ID
  // -d : 데이터베이스명
```
