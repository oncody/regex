class RegexCharacter {
    static WILDCARD = new RegexCharacter(".");
    static BACKSLASH = new RegexCharacter("\\");
    static WHITESPACE = new RegexCharacter("\\s");
    static NON_WHITESPACE = new RegexCharacter("\\S");
    static DIGIT = new RegexCharacter("\\d");
    static NON_DIGIT = new RegexCharacter("\\D");
    static LETTER = new RegexCharacter("\\w");
    static NON_LETTER = new RegexCharacter("\\W");

    /**
     * @param {string} char
     * @returns {RegexCharacter}
     */
    constructor(char) {
        this._char = char;
    }

    /**
     * @returns {string}
     */
    toString() {
        return this._char;
    }
}

export {RegexCharacter}
