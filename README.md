# nuber-server

## Resolvers

### Public Resolvers:

- [x] Sign In / Sign Up with Facebook
- [x] Sign in with Email
- [ ] Start Phone Number Verification
- [ ] Complete Phone Number Verification
- [ ] Sign Up with Email

---

### Private Resolvers:

- [ ] Generate JWT
- [ ] Verify JWT
- [ ] Verify Email
- [ ] Get My Profile
- [ ] Update my Profile
- [ ] Toggle Driving Mode
- [ ] Report Location / Orientation
- [ ] Add Place
- [ ] Edit Place
- [ ] Delete Place
- [ ] See Nearby Drivers
- [ ] Subscribe to Nearby Drivers
- [ ] Request a Ride
- [ ] Get Nearby Ride Requests
- [ ] Subscribe to Nearby Ride Requests
- [ ] Subscribe to Ride Status
- [ ] Get Chat Room Messages
- [ ] Subscribe to Chat Room Messages
- [ ] Send a Chat Message

## Code Challenge

- [ ] Get Ride History
- [ ] See Ride Detail

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
