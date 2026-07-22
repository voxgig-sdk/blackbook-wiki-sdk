package core

type BlackbookWikiError struct {
	IsBlackbookWikiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBlackbookWikiError(code string, msg string, ctx *Context) *BlackbookWikiError {
	return &BlackbookWikiError{
		IsBlackbookWikiError: true,
		Sdk:              "BlackbookWiki",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BlackbookWikiError) Error() string {
	return e.Msg
}
