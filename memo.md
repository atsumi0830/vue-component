## コンポーネントにdataをもたせる場合

関数で返してあげないといけないルールがある

```
data: function() {
   return {
        count: 0
   }
},
```

## コンポーネントからイベントを発火させる

$emitを使用する

【参考】
https://orizuru.io/blog/vue-js/vue_emit-props/