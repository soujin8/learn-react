# Reactでいろいろ弄ってみる用

## hooks試す

### useContext
グローバルなコンテンツオブジェクトを管理するためのフック。
`const value = useContext(ContextObject)`でコンテクストの現在値を取得
`<MyContext.Provider value={hoge}>`でコンテクストに値を設定

### useReducer
