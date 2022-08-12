import useDocumentTitle from '../hooks/useDocumentTitle';

const DocumentTitle = () => {
  const title = 'Home';

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  useDocumentTitle(title);

  return (
    <div>
      <h2>Document Title Component</h2>
    </div>
  );
};

export default DocumentTitle;
