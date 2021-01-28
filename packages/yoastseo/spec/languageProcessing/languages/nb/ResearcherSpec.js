import Researcher from "../../../../src/languageProcessing/languages/nb/Researcher.js";
import Paper from "../../../../src/values/Paper.js";
import getMorphologyData from "../../../specHelpers/getMorphologyData";
import functionWords from "../../../../src/languageProcessing/languages/nb/config/functionWords";

const morphologyDataNB = getMorphologyData( "nb" );

describe( "a test for Norwegian Researcher", function() {
	const researcher = new Researcher( new Paper( "This is another paper!" ) );

	it( "checks if the Norwegian Researcher still inherit the Abstract Researcher", function() {
		expect( researcher.hasResearch( "getParagraphLength" ) ).toEqual( true );
	} );

	it( "returns false if the default research is deleted in Norwegian Researcher", function() {
		expect( researcher.getResearch( "getFleschReadingScore" ) ).toBe( false );
	} );

	it( "returns false if the Norwegian Researcher doesn't have a certain config", function() {
		expect( researcher.getConfig( "stopWords" ) ).toBe( false );
	} );

	it( "returns the Norwegian function words", function() {
		expect( researcher.getConfig( "functionWords" ) ).toEqual( functionWords );
	} );

	it( "returns the Norwegian locale", function() {
		expect( researcher.getConfig( "language" ) ).toEqual( "nb" );
	} );

	it( "stems the Norwegian word using the Arabic stemmer", function() {
		researcher.addResearchData( "morphology", morphologyDataNB );
		expect( researcher.getHelper( "getStemmer" )( researcher )( "katter" ) ).toEqual( "katt" );
	} );
} );
