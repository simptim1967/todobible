<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<!--<xsl:output
    method="html"
    doctype-public="XSLT-compat"
    omit-xml-declaration="yes"
    encoding="UTF-8"
    indent="yes" />-->
  <xsl:output method="html" indent="yes"/>
  <xsl:preserve-space elements="verse"/>
  <xsl:template match="/">
<xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html>
</xsl:text>
    <html lang="en-GB"> 
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags-->
        <xsl:call-template name="PageTitle" />
        <meta name="keywords" content="king james holy bible, bible todo list, words of Jesus, bible index, the authorised version, KJV, KJB, KJAV, AV" />
 
        <!-- Bootstrap-->
        <link href="../css/bootstrap.min.css" rel="stylesheet" />
        <link href="../css/common_page.css" rel="stylesheet" />
        <link href="../css/kjv_page.css" rel="stylesheet" />
      </head>
      <body>
        <!-- Bible page menu -->
        <div class="navbar-wrapper">
          <div class="container">
            <nav class="navbar navbar-default navbar-static-top">
              <div class="container">
                <div class="navbar-header">
                  <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar"
                          aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand disabled"><strong><span style="color: lightskyblue;">ToDo:</span><span
                          style="color: gold;">Bible</span></strong></a>
                </div>
                <div class="navbar-collapse collapse" id="navbar">
                  <ul class="nav navbar-nav">
                    <li><a href="../index.html">Home</a></li>
                    <li class="dropdown">
                      <a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                                            aria-haspopup="true" aria-expanded="false">Bible <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="genesis_1.html">Start Reading The Bible</a></li>
                        <li><a href="king_james_bible_index_page.html">Bible Index Page</a></li>
                        <li class="divider" role="separator"></li>
                        <li><a>
                          <xsl:attribute name="href">
                            <xsl:value-of select="/bible/book/chapter/attribute::nextChapter"/>
                          </xsl:attribute>
                          <xsl:attribute name="alt">Next chapter (<xsl:value-of select="/bible/book/chapter/attribute::nextTitle"/>)</xsl:attribute>
                          <xsl:attribute name="title">Next chapter (<xsl:value-of select="/bible/book/chapter/attribute::nextTitle"/>)</xsl:attribute>
                          Next Chapter
                        </a></li>
                        <li><a>
                            <xsl:attribute name="href">
                              <xsl:value-of select="/bible/book/chapter/attribute::prevChapter"/>
                            </xsl:attribute>
                              <xsl:attribute name="alt">Previous chapter (<xsl:value-of select="/bible/book/chapter/attribute::prevTitle"/>)</xsl:attribute>
                              <xsl:attribute name="title">Previous chapter (<xsl:value-of select="/bible/book/chapter/attribute::prevTitle"/>)</xsl:attribute>
                            Previous Chapter
                        </a></li>
                        <li><a href="#gotoChapter">
                          <xsl:attribute name="title">Go To Chapter (<xsl:value-of select="/bible/book/attribute::title"/>)</xsl:attribute>
                          Go To Chapter ...</a></li>
                        <li class="divider" role="separator"></li>
                        <li><a href="#vref">Go To Bible Reference ...</a></li>
                      </ul>
                    </li>
                    <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button"
                                            aria-haspopup="true" aria-expanded="false">ToDo <span
                            class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="../todo/bible_todo_list_ultimate.html">Ultimate Bible ToDo List</a></li>
                        <li class="divider" role="separator"></li>
                        <li><a href="../todo/bible_todo_list.html">Bible ToDo List (By Topic)</a></li>
                        <li><a href="../todo/bible_todo_list_by_bible_book.html">Bible ToDo List (By Bible
                          Book)</a></li>
                        <li><a href="../todo/bible_todo_list_by_a_to_z.html">Bible ToDo List (By A-Z)</a></li>
                        <li class="divider" role="separator"></li>
                        <li><a href="../todo/bible_todo_topics_index.html">ToDo List Topic Index</a></li>
                      </ul>
                    </li>
                    <li><a href="../about_todo_bible.html">About</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <!-- Bible page header -->
        <div class="container">
          <div class="bpheaderblock hidden-sm hidden-xs">
            <div class="logoverse">

              <p>
                But be ye doers of the word,<br/>
                  and not hearers only,<br/>
                  deceiving your own selves.
              </p>
              <a href="james_1.html?goto=22">James 1:22</a>
              
            </div>
          </div>
        </div>

        <!-- Bible page content -->
        <div class="container">
          <div class="row">
        <!-- Bible chapter content -->
        <div class="col-md-8">
          <div class="biblepage">
              <!--Begin biblepage-->
              <xsl:call-template name="ChapterHeading" />
              <xsl:call-template name="ChapterContent" />
              <xsl:call-template name="ChapterFooter" />
          </div>
        </div><!--/col-md-8-->
            <!-- Bible page navigation -->
        <div class="col-md-4 hidden-print">
          <hr class="featurette-divider hidden-md hidden-lg" />
            <div class="biblenavigation">
              <h3>Navigate The Bible</h3>
              <h4>Go To Bible Reference</h4>
              <div class="versenavigation">
                <form>
                  <label for="vref">Enter a bible reference (e.g. 'John 3:16' or 'Ps 23') to go to:</label>
                  <fieldset>
                    <input type="text" id="vref" maxlength="25" />
                    <button class="btn-sm btn-primary" id="gotoverse" type="submit" onclick="GoToVerse(); return false">Go</button>
                  </fieldset>
                </form>
              </div>
              <!--End versenavigation-->
              <h4 id="gotoChapter">Go To Chapter [<xsl:value-of select="/bible/book/attribute::title"/>]</h4>
              <table class="chapternavigation">
                <xsl:variable name="lastChapter" select="/bible/book/attribute::chapterCount"/>
                <xsl:choose>
                  <xsl:when test="$lastChapter &gt; 99">
                    <xsl:call-template name="loop">
                      <xsl:with-param name="i">
                        <xsl:number value="1" />
                      </xsl:with-param>
                      <xsl:with-param name="currentChapter" select="/bible/book/chapter/attribute::number">
                      </xsl:with-param>
                      <xsl:with-param name="lastChapter" select="/bible/book/attribute::chapterCount">
                      </xsl:with-param>
                      <xsl:with-param name="max" select="7"><!--Max columns per chapter navigation row-->
                      </xsl:with-param>
                    </xsl:call-template>
                  </xsl:when>
                  <xsl:otherwise>
                    <xsl:call-template name="loop">
                      <xsl:with-param name="i">
                        <xsl:number value="1" />
                      </xsl:with-param>
                      <xsl:with-param name="currentChapter" select="/bible/book/chapter/attribute::number">
                      </xsl:with-param>
                      <xsl:with-param name="lastChapter" select="/bible/book/attribute::chapterCount">
                      </xsl:with-param>
                      <xsl:with-param name="max" select="10">
                      </xsl:with-param>
                    </xsl:call-template>
                  </xsl:otherwise>
                </xsl:choose>
              </table>
            </div><!--/biblenavigation-->
         </div><!--/col-md-4-->
          </div><!--/row-->
        </div><!--/container-->

        <!-- Bible page footer -->
        <div class="container">
          <hr class="featurette-divider" />
          <footer class="footer text-center">
            <p>Copyright <xsl:text disable-output-escaping='yes'>&amp;copy;</xsl:text> 2017 ToDoBible.org. All rights reserved. 
              <a href="#"><small><xsl:text disable-output-escaping='yes'>Top&amp;nbsp;of&amp;nbsp;page</xsl:text></small></a>
            </p>
          </footer>
        </div>

        <!-- end of bible page content -->
        <script type="text/javascript" src="../script/biblenav.js"></script>
        <script src="../script/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src="../script/jquery.scrollTo.js"></script>
        <script src="../script/bootstrap.min.js"></script>
        <script type="text/javascript" src="../script/highlight-verses.js"></script>
      </body>
    </html>
  </xsl:template>

  <!-- XSL TEMPLATE CODE STARTS HERE -->
  
  <xsl:template name="loop">
    <xsl:param name="i"></xsl:param>
    <xsl:param name="currentChapter"></xsl:param>
    <xsl:param name="lastChapter"></xsl:param>
    <xsl:param name="max"></xsl:param>
    <xsl:choose>
      <xsl:when test="$i &lt;= $lastChapter">
        <!--Process chapter i-->

        <!--Is this the start of a new table row?-->
        <xsl:if test="$i mod $max = 1">
          <xsl:text disable-output-escaping="yes">
          &lt;tr&gt;
</xsl:text>
        </xsl:if>
        <!--Output chapter table cell-->
        <td>
          <xsl:choose>
            <xsl:when test="$i = $currentChapter">
              <xsl:attribute name="id">currentchapterhighlight</xsl:attribute>
              <xsl:value-of select="$i"/>
            </xsl:when>
            <xsl:otherwise>
              <a>
                <xsl:attribute name="href"><xsl:value-of select="/bible/book/chapter/attribute::chapterPage"/><xsl:value-of select="$i"/>.html</xsl:attribute>
                <xsl:attribute name="title">Go to <xsl:value-of select="/bible/book/attribute::name"/> chapter <xsl:value-of select="$i"/></xsl:attribute>
                <xsl:value-of select="$i"/>
              </a>
            </xsl:otherwise>
          </xsl:choose>
        </td>
        <!--Is this the end of a table row?-->
        <xsl:if test="($i mod $max = 0) or ($i = $lastChapter)">
          <xsl:text disable-output-escaping="yes">
        &lt;/tr&gt;
</xsl:text>
        </xsl:if>


        <!--Process next chapter-->
        <xsl:call-template name="loop">
          <xsl:with-param name="i">
            <xsl:number value="number($i)+1" />
          </xsl:with-param>
          <xsl:with-param name="currentChapter">
            <xsl:number value="number($currentChapter)" />
          </xsl:with-param>
          <xsl:with-param name="lastChapter">
            <xsl:number value="number($lastChapter)" />
          </xsl:with-param>
          <xsl:with-param name="max">
            <xsl:number value="number($max)" />
          </xsl:with-param>
        </xsl:call-template>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="PageTitle">
    <!-- <title>King James Bible: Genesis chapter 1</title> -->
    <title><xsl:value-of select="/bible/book/attribute::title"/> chapter <xsl:value-of select="/bible/book/chapter/attribute::number"/> - <xsl:value-of select="/bible/attribute::title"/>
    </title>
    <meta name="description">
<xsl:attribute name="content">
<xsl:value-of select="/bible/attribute::title"/>: <xsl:value-of select="/bible/book/attribute::title"/> chapter <xsl:value-of select="/bible/book/chapter/attribute::number"/>
</xsl:attribute>
	</meta>
  </xsl:template>

  <xsl:template name="ChapterHeading">
    <xsl:text>
    </xsl:text>
    <!-- Generate header for this chapter -->
      <table class="bp_head_foot" width="100%" style="margin-bottom: 7px;">
        <tr>
          <td width="20">
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="/bible/book/chapter/attribute::prevChapter"/>
              </xsl:attribute>
              <img src="../images/prev.png" width="20" height="20">
                <xsl:attribute name="alt">Previous chapter (<xsl:value-of select="/bible/book/chapter/attribute::prevTitle"/>)</xsl:attribute>
                <xsl:attribute name="title">Previous chapter (<xsl:value-of select="/bible/book/chapter/attribute::prevTitle"/>)</xsl:attribute>
			  </img>
            </a>
          </td>
          <td>
            <h1>
              <xsl:choose>
                <xsl:when test="/bible/book/attribute::number = 19">
                  Psalm<xsl:text> </xsl:text><xsl:value-of select="/bible/book/chapter/attribute::number"/>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="/bible/book/attribute::title"/> chapter <xsl:value-of select="/bible/book/chapter/attribute::number"/>
                </xsl:otherwise>
              </xsl:choose>
            </h1>
          </td>
          <td width="20">
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="/bible/book/chapter/attribute::nextChapter"/>
              </xsl:attribute>
              <img src="../images/next.png" width="20" height="20">
                <xsl:attribute name="alt">Next chapter (<xsl:value-of select="/bible/book/chapter/attribute::nextTitle"/>)</xsl:attribute>
                <xsl:attribute name="title">Next chapter (<xsl:value-of select="/bible/book/chapter/attribute::nextTitle"/>)</xsl:attribute>
			  </img>
            </a>
          </td>
        </tr>
      </table>
    <xsl:text>
</xsl:text>
  </xsl:template>

  <xsl:template name="ChapterFooter">
    <xsl:text>
    </xsl:text>
    <!-- Generate footer for this chapter and make it hidden on print -->
      <table class="bp_head_foot hidden-print" style="margin-top: 7px;">
        <tr>
          <td width="20">
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="/bible/book/chapter/attribute::prevChapter"/>
              </xsl:attribute>
              <img src="../images/prev.png" width="20" height="20">
                <xsl:attribute name="alt">Previous chapter (<xsl:value-of select="/bible/book/chapter/attribute::prevTitle"/>)</xsl:attribute>
                <xsl:attribute name="title">Previous chapter (<xsl:value-of select="/bible/book/chapter/attribute::prevTitle"/>)</xsl:attribute>
			  </img>
            </a>
          </td>
          <td>
            <h2>
              <xsl:choose>
                <xsl:when test="/bible/book/attribute::number = 19">
                  Psalm<xsl:text> </xsl:text><xsl:value-of select="/bible/book/chapter/attribute::number"/>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="/bible/book/attribute::title"/> chapter <xsl:value-of select="/bible/book/chapter/attribute::number"/>
                </xsl:otherwise>
              </xsl:choose>
            </h2>
          </td>
          <td width="20">
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="/bible/book/chapter/attribute::nextChapter"/>
              </xsl:attribute>
              <img src="../images/next.png" width="20" height="20">
                <xsl:attribute name="alt">Next chapter (<xsl:value-of select="/bible/book/chapter/attribute::nextTitle"/>)</xsl:attribute>
                <xsl:attribute name="title">Next chapter (<xsl:value-of select="/bible/book/chapter/attribute::nextTitle"/>)</xsl:attribute>
			  </img>
            </a>
          </td>
        </tr>
      </table>
    <xsl:text>
</xsl:text>
  </xsl:template>

  <xsl:template name="ChapterContent">
    <xsl:apply-templates select="/bible/book/chapter/*" />
  </xsl:template>

  <xsl:template match="verse">
    <div class="verse">
      <xsl:attribute name="id">v<xsl:value-of select="attribute::number"/></xsl:attribute>
      <xsl:text>
    </xsl:text>
        <!--Does this verse contain a ToDo item?
        <xsl:if test="attribute::todo = 'true'">
          <xsl:text disable-output-escaping="yes">&lt;span style="background-color:#FFFF00; border:solid 1px black;"&gt;</xsl:text>
        </xsl:if>
        -->
      <b><xsl:value-of select="attribute::number"/></b>
        <xsl:if test="attribute::todo = 'true'">
          <xsl:text disable-output-escaping="yes">&lt;/span&gt;</xsl:text>
        </xsl:if>
      <xsl:text> </xsl:text>
      <xsl:value-of disable-output-escaping="yes" select="."/>
      <xsl:text>
</xsl:text>
    </div>
    <xsl:text>
</xsl:text>
  </xsl:template>

  <xsl:template match="caption">
    <p class="text-center">
      <xsl:value-of disable-output-escaping="yes" select="."/>
    </p>
    <xsl:text>
</xsl:text>
  </xsl:template>

</xsl:stylesheet>
