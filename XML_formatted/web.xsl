<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
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
        <xsl:call-template name="PageTitle" />
        <meta name="keywords" content="king james holy bible, bible todo list, words of Jesus, bible index, the authorised version, KJV, KJB, KJAV, AV" />
        <meta name="viewport" content="width=1024" />
        <link href="../css/reset.css" rel="stylesheet" type="text/css" />
        <link href="../css/tbpage.css" rel="stylesheet" type="text/css" />
        <link href="../css/biblepage.css" rel="stylesheet" type="text/css" />
		<link href="../css/biblepage_print.css" rel="stylesheet" type="text/css" media="print" />
        <script src="../script/biblenav.js" type="text/javascript"></script>
      </head>
      <body>
        <div class="container">
          <!--Begin container-->
          <div class="headerblock">
            <!--Begin headerblock-->
            <a href="../index.html">
              <div class="logoblock">
                <!--Begin logoblock-->
                <h5>
                  <span style="color:white;">TODO:</span>
                  <span style="color:gold;">Bible</span>
                </h5>
                <p>Read it. Believe it.</p>
                <p>
                  <b>Do it!</b>
                </p>
              </div>
              <!--End logoblock-->
            </a>
            <div class="logoverse">
              <!--Begin logoverse-->
              <p>
                But be ye doers of the word,<br />
                  and not hearers only,<br />deceiving your own selves.</p>
              <a href="james_1.html#v22">James 1:22</a>
            </div>
            <!--End logoverse-->
          </div>
          <!--End headerblock-->
          <div class="contentblock">
            <!--Begin contentblock-->
            <div class="leftsidebar">
              <!--Begin leftsidebar-->
              <div class="p_menu">
                <!--Begin p_menu-->
                <a href="../index.html">Home</a>
                <a href="../about_todo_bible.html">About TODO:Bible</a>
                <a class="Selected">Read The Bible</a>
              </div>
              <!--End p_menu-->
              <div class="p_submenu">
                <!--Begin p_submenu-->
                <a href="king_james_bible_index_page.html">Bible Index Page</a>
              </div>
              <!--End p_submenu-->
              <div class="p_menu">
                <!--Begin p_menu-->
                <a href="../todo/bible_todo_list.html">Bible ToDo List</a>
              </div>
              <!--End p_menu-->
            </div>
            <!--End leftsidebar-->
            <div class="rightsidebar">
              <!--Begin rightsidebar-->
              <h4>Navigate The Bible</h4>
              <h5>Go To Bible Reference</h5>
              <div class="versenavigation">
                <form>
                  <p>Type a reference to go to:</p>
                  <fieldset>
                    <input type="text" id="vref" />
                    <input id="gotoverse" type="submit" value="Go" onclick="GoToVerse(); return false" />
                    <p>e.g. 'John 3:16' or 'Ps 23'</p>
                  </fieldset>
                </form>
              </div>
              <!--End versenavigation-->
              <h5>Chapter [<xsl:value-of select="/bible/book/attribute::title"/>]</h5>
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
                      <xsl:with-param name="max" select="7">
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
            </div>
            <!--End rightsidebar-->
            <div class="biblepage">
              <!--Begin biblepage-->
              <xsl:call-template name="ChapterHeading" />
              <xsl:call-template name="ChapterContent" />
              <xsl:call-template name="ChapterFooter" />
            </div>
            <!--End biblepage-->
          </div>
          <!--End contentblock-->
          <div class="footerblock">
            <!--Begin footerblock-->
            Copyright <xsl:text disable-output-escaping="yes">&amp;copy;</xsl:text> 2017 ToDoBible.org. All rights reserved.<xsl:text disable-output-escaping="yes">&amp;nbsp;&amp;nbsp;</xsl:text><a href="#top">Top of page</a>
          </div>
          <!--End footerblock-->
        </div>
        <!--End container-->
      </body>
    </html>
  </xsl:template>

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
      <table class="bp_head_foot">
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
    <!-- Generate footer for this chapter -->
      <table class="bp_head_foot">
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
    <p>
      <xsl:value-of disable-output-escaping="yes" select="."/>
    </p>
    <xsl:text>
</xsl:text>
  </xsl:template>

</xsl:stylesheet>