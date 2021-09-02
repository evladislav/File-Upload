# File-Upload
Implement File upload function using node Express


## Prerequisties

* MongoDB|Postman|Navicat(Mongo Combass)

## File Post url

* http://localhost:5000/api/v0/nft/mint

## File save url

```
	path_to_repository/public/images/artwork
```

## Post Files

- Upload Fields
	* type(string)
	* name(string)
	* portfolioURL(string|url) - validation checked automatically
	* royalties
	* artworkFiles(file object)

- Uploaded example

```
	{
		"_id":{"$oid":"6126d7a59e440f2fc83770b4"},
		"type":"ArtWork Type 1",
		"name":"Artwork Name 21",
		"portfolioURL":"https://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application",
		"about":"Artwork author is xxx",
		"royalties":89.03,
		"artworkFiles":"E:/03_JS/REACT/spacegrim-backend/public/images/artwork/-VMswPFAe2i-my_photo.jpg",
		"__v":0
	}
```
