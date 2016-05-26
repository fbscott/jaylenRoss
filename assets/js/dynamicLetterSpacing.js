/**
 * Force text to dynamically expand to fill
 * parent container by increasing letter-spacing.
 * @param  {Object} el : DOM element passed in from
 *                       index.htm
 */
function dynamicLetterSpacing(el, parent) {

    var arrayOfWordsOrPhrases = [],
        wordOrPhrase          = document.getElementsByClassName(el),
        charCount             = 0;

    arrayOfWordsOrPhrases.push(wordOrPhrase);

    /**
     * Loop through collection of words, pass
     * current word and measurements to addSpans();
     */
    for(var i = 0; i < arrayOfWordsOrPhrases[0].length; i++) {
        var _currentWordOrPhrase            = arrayOfWordsOrPhrases[0][i],
            _currentWordOrPhraseWidth       = _currentWordOrPhrase.offsetWidth;
            _currentWordOrPhraseContent     = _currentWordOrPhrase.textContent,
            _currentWordOrPhraseParent      = document.getElementById(parent);
            _currentWordOrPhraseParentWidth = _currentWordOrPhraseParent.offsetWidth;
            _difference                     = Number(_currentWordOrPhraseParentWidth - _currentWordOrPhraseWidth),
            _spanifiedString                = addSpans(_currentWordOrPhraseContent, _difference);

            // console.log(_currentWordOrPhrase);
            // console.log('el width: ' + _currentWordOrPhraseWidth);
            // console.log('el content: ' + _currentWordOrPhraseContent);
            console.log(_currentWordOrPhraseParent);
            console.log(_currentWordOrPhraseParent.offsetWidth);
            // console.log('parent width: ' + _currentWordOrPhraseParentWidth);
            // console.log('difference: ' + _difference);
            // console.log(_spanifiedString);

            _currentWordOrPhrase.innerHTML = _spanifiedString;
    }

    /**
     * Add spans to each letter of current word
     * and increase its letter-spacing.
     * @param {Object} e : current word
     * @param {Number} s : difference of parent
     *                     container width minus
     *                     current word width.
     * @return {String}  : concatenated array with
     *                     spans for letter-spacing
     *                     styling
     */
    function addSpans(e, s) {
        var _spanArray   = [],
            _concatArray = '',
            _charString  = e.length,
            _addPadding  = 100;

        charCount = _charString;

        for(var i = 0; i < e.length; i++) {
            if(i < e.length - 1) {
                _spanArray.push('<span style="letter-spacing: ' + (s + _addPadding) / Number(_charString - 1) + 'px;">' + e[i] + '</span>');
            } else {
                _spanArray.push('<span>' + e[i] + '</span>');
            }
        }

        _concatArray = _spanArray.join('');

        return _concatArray;
    }
 }
