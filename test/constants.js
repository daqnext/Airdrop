const merkleRoot = "0x218b9903f488bb4f68f6449a4b243f177962f09ca03c5f27bf1ca96b5420516e"
const leaves = [
  {
    "address": "0xea1ea22b5b1252ff05bc3dfa630381e72b87f002",
    "proof": [
      "0x8c608326e989db37b377cea1a5ce8f107493d639b7a823a02711727e35ebbff0",
      "0x6b82ca9fb97bedf9f28a942fc2149bbbb42662e9e02f4aef2499517f22a82ee2",
      "0x79ac48d7d94d987f35d7a596ca4a82cf9c13c2d514a916bf9f44d729657b773e",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 1725
  },
  {
    "address": "0x4d009c40b28478d713a733ef4b126283ce57ada0",
    "proof": [
      "0x58a02d42cfa1b2541a45344d8ef14746f9d775a2ed91b17cadb3b555500b9b58",
      "0x6b82ca9fb97bedf9f28a942fc2149bbbb42662e9e02f4aef2499517f22a82ee2",
      "0x79ac48d7d94d987f35d7a596ca4a82cf9c13c2d514a916bf9f44d729657b773e",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 999
  },
  {
    "address": "0x7ed4f6319c684f1111c23c679927cd62fe571448",
    "proof": [
      "0x55c37ce9e588392f66ef0e600c3ec1a35a7ec36048aa347e5c934bf04c98ee00",
      "0xb47a5d329a2acba62701c6d5c712d6174d62ffa2437bfc5d092fe6df6b2a28ea",
      "0x79ac48d7d94d987f35d7a596ca4a82cf9c13c2d514a916bf9f44d729657b773e",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 949
  },
  {
    "address": "0x2D9CF62dC6Cc0cFca85dcAbf03e60729b52BD702",
    "proof": [
      "0xca38fa51ba885192e3da23a658599ef5c09660a0973c3e9d668bf17f39c4f19e",
      "0xb47a5d329a2acba62701c6d5c712d6174d62ffa2437bfc5d092fe6df6b2a28ea",
      "0x79ac48d7d94d987f35d7a596ca4a82cf9c13c2d514a916bf9f44d729657b773e",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 890
  },
  {
    "address": "0xcf811a80aa5a35777f87adcb0a218d1c2f621a78",
    "proof": [
      "0x47b3eaaad41666537658d762d3f4a80bb73ebb78e8a7b93ee5e582926873a71f",
      "0x356b348dcee615012d5ebee338d8997ca4996bb880f7e28435a32eb97a65b2d9",
      "0x3520682ef11d7b410cc3324ae5a62fc33d6e85677ff94ba310005db8e55c59c2",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 793
  },
  {
    "address": "0x7ef81e540c2989d6842634e1cf8f20d4a94fe2ed",
    "proof": [
      "0x2bb62f8d77988334da622cc80eeb395c41025811ed52556379d5095c723fce7a",
      "0x356b348dcee615012d5ebee338d8997ca4996bb880f7e28435a32eb97a65b2d9",
      "0x3520682ef11d7b410cc3324ae5a62fc33d6e85677ff94ba310005db8e55c59c2",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 766
  },
  {
    "address": "0x35928274be1df126b8f4dd672c717b527f1696f6",
    "proof": [
      "0x1dde7a01830f4ea894e9da0b263f9ad37cd9c373a2417e8a87cceed0831a3c4f",
      "0xff8c2b35c081816bbadb3a295e9b72808c696853455e07a1959611921712e289",
      "0x3520682ef11d7b410cc3324ae5a62fc33d6e85677ff94ba310005db8e55c59c2",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 748
  },
  {
    "address": "0x0d09dC9a840B1b4ea25194998fD90bB50fC2008A",
    "proof": [
      "0xa7e7eed8a5acd23a486f8df4e93a3b4bed34cd8fafa08c213873a8fdcb4ddbd7",
      "0xff8c2b35c081816bbadb3a295e9b72808c696853455e07a1959611921712e289",
      "0x3520682ef11d7b410cc3324ae5a62fc33d6e85677ff94ba310005db8e55c59c2",
      "0x2e7f7097052353ec63bb0062d36e31a9503ee09740b191d4d624bf41bf039e8c",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 733
  },
  {
    "address": "0xf07f2a884b742ddb61419dd9d7698c206319ff40",
    "proof": [
      "0xb52989fa4f299c09c883a78e4cbd514a598bd5613693503b9c9412cc5c787f55",
      "0x289225a7db77552853d8e349f7730a12f9b321bd66fe67bfc612bc0ca754323e",
      "0x9eabf774198870906a2e6b6342dad06d50044993a7bfa9514652065437451daf",
      "0xf31c136eb2a693f45e72eaa71e037ce86e73d7552d4871526dbcf7bdeec07e0d",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 729
  },
  {
    "address": "0x610e159edb81b47c9a9d52c466b3e0179eb77d68",
    "proof": [
      "0xb74815a228cc8b4849edddb633f6c13e2091613beaba3e8937859eb2733e2afb",
      "0x289225a7db77552853d8e349f7730a12f9b321bd66fe67bfc612bc0ca754323e",
      "0x9eabf774198870906a2e6b6342dad06d50044993a7bfa9514652065437451daf",
      "0xf31c136eb2a693f45e72eaa71e037ce86e73d7552d4871526dbcf7bdeec07e0d",
      "0xaef67a69715945f977c0aef905e20199e99b438543f149d0b258a80b2717dd49",
      "0xded91f47390f7276d36b0680bc26c6965953501b0991fa053110a1c74f1e3e51",
      "0x07961ced2e80db08c87735d7bceb807e3b5a49da378dd69183939e1a1e1f9997",
      "0xebb8293e9ce0c8fe055c5539749d5ca7140d7375a10b4475ae1f23cf84074c81",
      "0x7372ca2465a132141b0cc530ed39966a60019fca340077a923d8e304055c5b8b",
      "0xae4d7fd87f72896e41a17259fee9a4ba7ca12ff95ab762f185f9def6558245a9",
      "0x4df37eeb025a24db9c1cda94a8ae2e16498543dd84c6453db60252deca8167ed",
      "0x7f9d3a80980e6a124774251eafdcb2b189c628d25ca203967360718371753730",
      "0x33247a1a9cde9507c9c429e2715d2fc16885717641c2342b6b34177d8b1dd990",
      "0x2e2d4f1821df671eb5d4346d5194471050b12469cc8a559ebdc8b254a43ef9bc"
    ],
    "amount": 729
  }
]

module.exports = {
  merkleRoot,
  leaves
}
