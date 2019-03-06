import './html-equal.js';

const test = QUnit.test;

function makePatternTemplate(pattern) {

}

test('html template will match template literal', assert => {
    //arrange
    const pattern = {
        "id": 909820,
        "name": "Clean Lines",
        "permalink": "clean-lines-2",
        "first_photo": {
            "medium_url": "https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg",
        },
        "pattern_author": {
            "name": "Susan Ashcroft",
            "patterns_count": 259,
            "permalink": "susan-ashcroft",
            "users": [
                {
                    "username": "stitchnerd",
                }
            ]
        },
        "pattern_sources": [
            {
                "url": "http://www.ravelry.com/stores/stitchnerd-designs",
            }
        ]
    };

    //act
    const result = makePatternTemplate(pattern);

    //assert
    assert.htmlEqual(result, ``);
});

